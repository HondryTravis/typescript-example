const gulp = require('gulp')
const rollup = require('rollup')
const rollupTypescript = require('rollup-plugin-typescript')

/**
 *
 * @param { string } entry  必须
 * @param { string } outDir 必须
 * @param { string } moduleName 必须
 */
const rollupBuild = (entry,outDir,moduleName)  => {
  return  rollup.rollup({
    input: entry,
    plugins: [
      rollupTypescript()
    ]
  }).then( bundle => {
    return bundle.write({
      file: outDir,
      format:'es',
      name: moduleName,
      sourcemap: true
    })
  })
}
const buildTs = (done) => {
  rollupBuild('../../src/index.ts', '../../dist/index.js', 'index')
  done()
}

gulp.task('default', gulp.series(buildTs));