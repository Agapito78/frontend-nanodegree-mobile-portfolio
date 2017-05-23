## Website Performance Optimization portfolio project

This project is an updated version of **"udacity/frontend-nanodegree-mobile-portfolio"**. Improvements to this website 
 were performed according recommendations from [Google PageSpeed tool](https://developers.google.com/speed/pagespeed/insights/)
 
Link for this project on [GitHub](https://github.com/udacity/frontend-nanodegree-mobile-portfolio).

### Getting started

To check modified page, please, visit this [link](https://agapito78.github.io/frontend-nanodegree-mobile-portfolio/)

#### Part 1: Optimized HTML/CSS elements

Below there is a list of changes on HTML and CSS files:

1. Images were optimized to reduce its size for fast loading
2. CSS was minified using Gulp

    ```bash
    gulp.task('default', function() {
        return gulp.src("css/style.css")
            .pipe(cleanCSS({debug: true}, function(details) {
                console.log(details.name + ': ' + details.stats.originalSize);
                console.log(details.name + ': ' + details.stats.minifiedSize);
            }))
            .pipe(concat('style.min.css'))
            .pipe(gulp.dest('css'));
    });
    ```
   

3. Script tags were adjusted to avoid render-blocking using ***'async'*** attribute.

    ```bash
    <script src="https://www.google-analytics.com/analytics.js" async></script>
     ```
  
4. Javascripts file was minified using Gulp

    ```bash
    gulp.task('js-minify', function() {
        return gulp.src("views/js/main.js")
            .pipe(rename('main.min.js'))
            .pipe(uglify())
            .pipe(gulp.dest("views/js"));
    });
    ```

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, some changes were performed in views/js/main.js to allow 60 fps. 

* **CAUSE:** A function called ***updatePositions()*** was causing performance issues (too much layout). 
* **SOLUTION:** A new function called ***updateOpacity()*** was created to avoid "layout" when scrolling and use only "opacity" (Composite). There are many different solutions for this scenario.

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
