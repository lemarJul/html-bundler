const customAttribute = "include-html";

export default function bundleDocument(document = window.document) {
  const childrenToLoad = getChildrenToLoad(document);
  return Promise.all([...childrenToLoad].map(loadHTML));
}

function loadHTML(element) {
  const src = element.getAttribute(customAttribute);
  return fetch(src)
    .then((response) => {
      if (!response.ok) {
        throw new Error(
          "Failed to load " + src + ", status code: " + response.status
        );
      }
      return response.text();
    })
    .then((data) => {
      element.innerHTML = data;
      const childrenToLoad = getChildrenToLoad(element);
      if (childrenToLoad.length) bundle(element);
    })
    .catch((error) => {
      console.error(error);
    })
    .finally(() => {
      element.removeAttribute("load-html");
      console.log("loaded " + src);
    });
}

function getChildrenToLoad(element) {
  return element.querySelectorAll("[" + customAttribute + "]");
}
