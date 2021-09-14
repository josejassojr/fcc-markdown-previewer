let editExpand = 0;
let prevExpand = 0;

export const toggleExpandEditor = () => {
  if (window.innerWidth >= 400) {
    if (editExpand == 0) {
      document.getElementById("editor-container").style.height = "90vh";
      document.getElementById("editor-container").style.width = "90vw";
      document.getElementById("editor").style.width = "99.5%";
      document.getElementById("editor").style.height = "92.5%";

      editExpand = 1;
    } else {
      document.getElementById("editor-container").style.height = "50vh";
      document.getElementById("editor-container").style.width = "50vw";
      document.getElementById("editor").style.width = "99%";
      document.getElementById("editor").style.height = "87%";
      editExpand = 0;
    }
  } else {
    if (editExpand == 0) {
      document.getElementById("editor-container").style.height = "90vh";
      document.getElementById("editor").style.height = "95.5%";
      editExpand = 1;
    } else {
      document.getElementById("editor-container").style.height = "50vh";
      document.getElementById("editor").style.height = "91.5%";
      editExpand = 0;
    }
  }
};

export const toggleExpandPreview = () => {
  if (window.innerWidth >= 400) {
    if (prevExpand == 0) {
      document.getElementById("preview-container").style.width = "90vw";
      prevExpand = 1;
    } else {
      document.getElementById("preview-container").style.width = "70vw";
      prevExpand = 0;
    }
  } else {
    if (prevExpand == 0) {
      document.getElementById("preview").style.height = "90%";
      prevExpand = 1;
    } else {
      document.getElementById("preview").style.height = "70vw";
      prevExpand = 0;
    }
  }
};
