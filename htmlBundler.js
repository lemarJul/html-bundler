const customAttribute = "include-html";

export default function bundleHTML(element = window.document) {
  const childrenToInclude = getChildrenToInclude(element);
  return Promise.all([...childrenToInclude].map(includeHTML));
}

function getChildrenToInclude(element) {
  return element.querySelectorAll("[" + customAttribute + "]");
}

function includeHTML(element) {
  const rscPath = element.getAttribute(customAttribute);
  return fetch(rscPath)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Failed to load " + rscPath + ", status code: " + response.status
        );
      }
      return response.text();
    })
    .then((data) => {
      element.innerHTML = data;
      const childrenToLoad = getChildrenToInclude(element);
      if (childrenToLoad.length) bundleHTML(element);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      element.removeAttribute("load-html");
      console.log("Included HTML: " + rscPath);
    });
}

