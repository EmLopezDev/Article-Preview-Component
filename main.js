const toast = document.getElementById("share_toast");
const shareButton = document.getElementById("share_button");

shareButton.addEventListener("click", () => {
    toast.classList.toggle("card__user--share-none");
    shareButton.classList.toggle("active");
});
