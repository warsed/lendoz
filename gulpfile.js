const gulp = require("gulp");
const less = require("gulp-less");
const autoprefixer = require("gulp-autoprefixer");

gulp.task("less", function () {
  return gulp.src("./less/**/style.less").pipe(less()).pipe(gulp.dest("./css"));
});
