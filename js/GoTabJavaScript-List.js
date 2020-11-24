<script>
// Javascript to enable link to tab
var url = document.location.toString();
if (url.match('#')) {
    $('.list-group a[href="#' + url.split('#')[1] + '"]').tab('show');
} 

// Change hash for page-reload
$('.list-group a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})
</script>