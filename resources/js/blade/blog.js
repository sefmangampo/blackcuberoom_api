function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

const initializeEvents = () => {
    const getPost = $(".single-post-content");
    if (getPost.length > 0) {
        const text = decodeHtml(getPost[0].innerHTML);
        $(getPost).remove();
        $(".single-post-output").html(text);
    }

    const getDate = $(".single-post-date-input");

    if (getDate.length > 0) {
        const date = $(getDate).text();
        const formattedDate = new Date(date).toLocaleDateString();
        $(getDate).remove();
        $(".single-post-date-output").text(formattedDate);
    }
};

$(() => {
    initializeEvents();
});
