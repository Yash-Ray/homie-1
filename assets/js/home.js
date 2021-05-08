let sub = $("#sub");

sub.click(function (e) {
  e.preventDefault();
  let moodVal = $("#mood").val();
  console.log(moodVal);
  $.ajax({
    type: "get",
    url: `/getMood/?mood=${moodVal}`,
    success: function (data) {
      console.log(data.playlist, "hi");
      let playList = data.playlist;
      $("#playlist").html("");
      playList.forEach((song) => {
        $("#playlist").prepend(`<p>${song.songName}</p>`);
      });

      $("#response").prepend();
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });
});
