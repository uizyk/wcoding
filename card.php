<a href=<?="./watch.php?path={$movie->filename}&title={$movie->title}"?>>
    <div class ="movie-card">
        <video width="426" height="240" onmouseover="this.play()" onmouseout="this.load();" poster="./posters/<?=$movie->poster?>" onended="this.load()">
            <source src="./video_files/<?=$movie->filename?>" type="video/mp4">
        </video>
        <div class="movie-info">
            <h2>
            <?=$movie->title?>
            </h2>
            <div class="row">
            <h5><?=$movie->genre?></h5>
            <h5><?=$movie->duration?></h5>
            </div>
        </div>
    </div>
</a> 