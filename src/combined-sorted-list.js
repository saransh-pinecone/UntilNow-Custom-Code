document.addEventListener("DOMContentLoaded", function () {
  var newsContainer = document.getElementById("all-list-container");
  var loadMoreButton = document.getElementById("load-more");
  var currentPage = 1;
  const limit = 9;
  const preloadPagesCount = 3; // Number of pages to preload
  const baseUrl =
    "https://main--untilnow-web.netlify.app/.netlify/functions/combined-news-list/";
  const collections = "news,articles,case-studies";
  const sortBy = "lastPublished";
  const order = "desc";
  var preloadedPages = {};
  var isLoading = false;

  function fetchNews(page) {
    const apiUrl = `${baseUrl}?collections=${collections}&sortBy=${sortBy}&order=${order}&page=${page}&limit=${limit}`;

    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        return data.items;
      })
      .catch((error) => console.error("Error fetching data:", error));
  }

  function renderNews(items) {
    items.forEach((item) => {
      // Create elements and append to the container
      var newsItem = document.createElement("div");
      newsItem.setAttribute("role", "group");
      newsItem.className = "swiper-slide w-dyn-item";

      var link = document.createElement("a");
      link.className = "swiper_link";
      link.href = item.link;

      var innerFlexDiv = document.createElement("div");
      innerFlexDiv.className = "swiper-align-flex";

      var marginDiv = document.createElement("div");
      marginDiv.className = "margin-bottom margin-small";

      var image = document.createElement("img");
      image.src = item.coverImage.url;
      image.alt = item.coverImage.alt || item.title || "";
      image.className = "news-image";
      image.loading = "lazy";

      marginDiv.appendChild(image);
      innerFlexDiv.appendChild(marginDiv);

      var contentDiv = document.createElement("div");
      contentDiv.className = "news-card_content";

      var textColorDiv = document.createElement("div");
      textColorDiv.className = "text-color-white";

      var headingMarginDiv = document.createElement("div");
      headingMarginDiv.className = "margin-bottom margin-small";

      var name = document.createElement("h3");
      name.className = "heading-style-h5";
      name.textContent = item.title;

      var description = document.createElement("h3");
      description.className = "heading-style-h5";
      description.textContent = item.description;
      description.style.overflow = "hidden";
      description.style.textOverflow = "ellipsis";

      headingMarginDiv.appendChild(name);
      headingMarginDiv.appendChild(description);
      textColorDiv.appendChild(headingMarginDiv);

      var tagRowDiv = document.createElement("div");
      tagRowDiv.className = "news-tag-row";

      var tagMarginDiv = document.createElement("div");
      tagMarginDiv.className = "padding-right padding-tiny";

      var tagComponentDiv1 = document.createElement("div");
      tagComponentDiv1.className = "tag_component";

      var category = document.createElement("div");
      category.className = "text-size-tiny";
      category.textContent = item.type;

      tagComponentDiv1.appendChild(category);
      tagMarginDiv.appendChild(tagComponentDiv1);

      const date = new Date(item.publishedDate);
      const formattedDate = date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      });
      var tagComponentDiv2 = document.createElement("div");
      tagComponentDiv2.className = "tag_component";

      var datetext = document.createElement("div");
      datetext.className = "text-size-tiny";
      datetext.textContent = formattedDate;

      tagComponentDiv2.appendChild(datetext);
      tagRowDiv.appendChild(tagMarginDiv);
      tagRowDiv.appendChild(tagComponentDiv2);
      contentDiv.appendChild(textColorDiv);
      contentDiv.appendChild(tagRowDiv);

      link.appendChild(innerFlexDiv);
      link.appendChild(contentDiv);
      newsItem.appendChild(link);
      newsContainer.appendChild(newsItem);
    });
  }

  function preloadPages() {
    for (let i = 1; i <= preloadPagesCount; i++) {
      fetchNews(i).then((items) => {
        if (i === 1) {
          renderNews(items); // Render the first page immediately
        } else {
          preloadedPages[i] = items; // Store preloaded pages
        }
      });
    }
  }

  // Initial preload
  preloadPages();

  // Setup load more button event listener
  loadMoreButton.addEventListener("click", function () {
    if (isLoading) return; // Prevent multiple clicks
    isLoading = true;

    currentPage++;
    if (preloadedPages[currentPage]) {
      renderNews(preloadedPages[currentPage]);
      delete preloadedPages[currentPage]; // Remove preloaded data after rendering
      preloadNextPage();
    } else {
      fetchNews(currentPage).then((items) => {
        renderNews(items);
        isLoading = false;
      });
    }
  });

  function preloadNextPage() {
    const nextPage = currentPage + preloadPagesCount - 1; // Preload the next page
    fetchNews(nextPage).then((items) => {
      preloadedPages[nextPage] = items; // Preload the next page
      isLoading = false;
    });
  }
});
