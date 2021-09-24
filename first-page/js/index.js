window.addEventListener('DOMContentLoaded', function () {

  document.querySelector('#open').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('active')
  });
  document.querySelector('#close').addEventListener('click', function () {
    document.querySelector('#burger').classList.toggle('active')
  });

  let card = document.querySelector("#cards");
  let items = Array.from(card.querySelectorAll(".content__card"));
  let loadMore = document.getElementById("loadMore");
  maxItems = 6;
  loadItems = 6;
  hiddenClass = "hiddenStyle";
  hiddenItems = Array.from(document.querySelectorAll(".hiddenStyle"));

  items.forEach(function (item, index) {
    if (index > maxItems - 1) {
      item.classList.add(hiddenClass);
    }
  });

  loadMore.addEventListener("click", function () {
    [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
      item,
      index
    ) {
      if (index < loadItems) {
        item.classList.remove(hiddenClass);
      }

      if (document.querySelectorAll("." + hiddenClass).length === 0) {
        loadMore.style.display = "none";
      }
    });
  });


  const element = document.querySelector('select')
  const choices = new Choices(element, {
    searchEnabled: false,
    itemSelectText: '',
    placeholder: true,
  });

  $('select#result').change(function () {
    var filter = $(this).val();
    filterList(filter);
  });
  function filterList(value) {
    var list = $(".content__cards .content__card");
    $(list).hide();
    if (value == "All") {
      $(".content__cards").find("li").each(function (i) {
        $(this).show();
      });
    } else {
      $(".content__cards").find("li[data-custom-type*=" + value + "]").each(function (i) {
        $(this).show();
      });
    }
  }
})
