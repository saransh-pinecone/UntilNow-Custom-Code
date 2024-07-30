// Second Working script / J /

document.addEventListener("DOMContentLoaded", function () {
  var newsContainer = $("#news-list-container");

  const apiUrl =
    "https://main--untilnow-web.netlify.app/.netlify/functions/combined-news-list/?collections=news,articles,case-studies,sortBy=lastPublished&order=desc&page=1&limit=15";

  fetch(apiUrl)
    .then((response) => response.json())

    .then((data) => {
      data.items.forEach((item) => {
        // Create the outer div with role and class attributes
        var newsItem = $("<div></div>").attr({
          role: "group",
          class: "swiper-slide w-dyn-item",
        });

        // Create the link element
        var link = $('<a class="swiper_link"></a>').attr("href", item.link);

        // Create the inner content structure
        var innerFlexDiv = $("<div></div>").addClass("swiper-align-flex");
        var marginDiv = $("<div></div>").addClass("margin-bottom margin-small");
        var image = $("<img>").attr({
          src: item.coverImage.url,
          loading: "lazy",
          alt: item.coverImage.alt || item.title || "",
          class: "news-image",
        });

        marginDiv.append(image);
        innerFlexDiv.append(marginDiv);

        var contentDiv = $("<div></div>").addClass("news-card_content");
        var textColorDiv = $("<div></div>").addClass("text-color-white");
        var headingMarginDiv = $("<div></div>").addClass(
          "margin-bottom margin-small"
        );
        var name = $("<h3></h3>").addClass("heading-style-h5").text(item.title);

        headingMarginDiv.append(name);
        textColorDiv.append(headingMarginDiv);

        var tagRowDiv = $("<div></div>").addClass("news-tag-row");
        var tagMarginDiv = $("<div></div>").addClass(
          "padding-right padding-tiny"
        );
        var tagComponentDiv1 = $("<div></div>").addClass("tag_component");
        var category = $("<div></div>")
          .addClass("text-size-tiny")
          .text(item.type);

        tagComponentDiv1.append(category);
        tagMarginDiv.append(tagComponentDiv1);

        const date = new Date(item.publishedDate);
        const formattedDate = date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        var tagComponentDiv2 = $("<div></div>").addClass("tag_component");
        var datetext = $("<div></div>")
          .addClass("text-size-tiny")
          .text(formattedDate); // Static date as per the example, you might want to use dynamic data here

        tagComponentDiv2.append(datetext);

        tagRowDiv.append(tagMarginDiv).append(tagComponentDiv2);
        contentDiv.append(textColorDiv).append(tagRowDiv);

        link.append(innerFlexDiv).append(contentDiv);
        newsItem.append(link);
        newsContainer.append(newsItem);
      });

      var swiper = new Swiper(".swiper", {
        slidesPerView: 4,
        slidesPerGroup: 3,
        autoHeight: true,
        loop: true,
        navigation: {
          enabled: true,
          prevEl: ".blog_left",
          nextEl: ".blog_right",
        },
        pagination: {
          enabled: true,
          hideOnClick: true,
          clickable: true,
          dynamicBullets: true,
          el: ".blog-pagination",
        },
        // autoplay: { enabled: true, disableOnInteraction: false },
        breakpoints: {
          320: {
            slidesPerView: 1.2,
            slidesPerGroup: 1,
            spaceBetween: 24,
            // navigation: { enabled: true },
            pagination: {
              enabled: true,
              hideOnClick: false,
              dynamicBullets: true,
              clickable: false,
            },
          },
          768: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 16,
            // navigation: { enabled: false },
            pagination: {
              enabled: false,
              hideOnClick: false,
              dynamicBullets: true,
              clickable: false,
            },
          },
          992: { slidesPerView: 3, spaceBetween: 16 },
          1280: { slidesPerView: 4, spaceBetween: 24 },
          1920: { slidesPerView: 4, spaceBetween: 30 },
        },
      });
    })

    .catch((error) => console.error("Error fetching data:", error));
});

document.addEventListener("DOMContentLoaded", function () {
  var newsContainer = $("#all-list-container");

  const apiUrl =
    "https://main--untilnow-web.netlify.app/.netlify/functions/combined-news-list/?collections=news,articles,case-studies,sortBy=lastPublished&order=desc&page=1&limit=15";

  fetch(apiUrl)
    .then((response) => response.json())

    .then((data) => {
      data.items.forEach((item) => {
        // Create the outer div with role and class attributes
        var newsItem = $("<div></div>").attr({
          role: "group",
          class: "swiper-slide w-dyn-item",
        });

        // Create the link element
        var link = $('<a class="swiper_link"></a>').attr("href", item.link);

        // Create the inner content structure
        var innerFlexDiv = $("<div></div>").addClass("swiper-align-flex");
        var marginDiv = $("<div></div>").addClass("margin-bottom margin-small");
        var image = $("<img>").attr({
          src: item.coverImage.url,
          loading: "lazy",
          alt: item.coverImage.alt || item.title || "",
          class: "news-image",
        });

        marginDiv.append(image);
        innerFlexDiv.append(marginDiv);

        var contentDiv = $("<div></div>").addClass("news-card_content");
        var textColorDiv = $("<div></div>").addClass("text-color-white");
        var headingMarginDiv = $("<div></div>").addClass(
          "margin-bottom margin-small"
        );
        var name = $("<h3></h3>").addClass("heading-style-h5").text(item.title);

        headingMarginDiv.append(name);
        textColorDiv.append(headingMarginDiv);

        var tagRowDiv = $("<div></div>").addClass("news-tag-row");
        var tagMarginDiv = $("<div></div>").addClass(
          "padding-right padding-tiny"
        );
        var tagComponentDiv1 = $("<div></div>").addClass("tag_component");
        var category = $("<div></div>")
          .addClass("text-size-tiny")
          .text(item.type);

        tagComponentDiv1.append(category);
        tagMarginDiv.append(tagComponentDiv1);

        const date = new Date(item.publishedDate);
        const formattedDate = date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        });
        var tagComponentDiv2 = $("<div></div>").addClass("tag_component");
        var datetext = $("<div></div>")
          .addClass("text-size-tiny")
          .text(formattedDate); // Static date as per the example, you might want to use dynamic data here

        tagComponentDiv2.append(datetext);

        tagRowDiv.append(tagMarginDiv).append(tagComponentDiv2);
        contentDiv.append(textColorDiv).append(tagRowDiv);

        link.append(innerFlexDiv).append(contentDiv);
        newsItem.append(link);
        newsContainer.append(newsItem);
      });
    })

    .catch((error) => console.error("Error fetching data:", error));
});
