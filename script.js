// @ts-check

/**
 * This script copies labels from one repo to the next
 *
 * @param {import('@octoherd/cli').Octokit} octokit
 * @param {import('@octoherd/cli').Repository} repository
 * @param {object} options
 * @param {string} options.template this is the repo you want the labels to be copied from
 */
export async function script(octokit, repository, { template }) {
  if (!template) {
    throw new Error(`--template is required`);
  }

  octokit.log.debug(
    "Load branch protection settings from template repository %s",
    template
  );

  const [templateOwner, templateRepo] = template.split("/");
  const [repoOwner, repoName] = repository.full_name.split("/");

  const response = await octokit.request('GET /repos/{owner}/{repo}/labels', {
    owner: templateOwner,
    repo: templateRepo
  })
  try {
    const {name, description, color} = response.data[0];

    const exists = await octokit.request('GET /repos/{owner}/{repo}/labels/{name}', {
      owner: repoOwner,
      repo: repoName,
      name,
    }).then(() => true, () => false)

    octokit.log.info(`${name} label exists: ${exists}`)
    
    if (!exists) {
      const label = await octokit.request('POST /repos/{owner}/{repo}/labels', {
        owner: repoOwner,
        repo: repoName,
        name,
        description,
        color
      })
      octokit.log.info(`${name} updated`)
    }

  } catch(e) {
    octokit.log.error(e)
  }

  // console.log(response)
}



