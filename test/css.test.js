const path = require("path");
const sass = require("node-sass");

const compile = css =>
  sass
    .renderSync({
      data: `@import 'tokens';${css}`,
      includePaths: [path.join(__dirname, "../lib/assets/stylesheets")],
      outputStyle: "compressed"
    })
    .css.toString()
    .trim();

describe("~@moda/tokens", () => {
  it("compiles correctly", () => {
    expect(
      compile(`

body {
  @include text(h1, $font: serif);

  margin: space(6) space("2x"); // same value => 2rem
  background-color: color(canary);

  @include breakpoint(md, $prop: max-width) {
    @include text(h1, $font: sans, $important: true);

    background-color: color(lilac);
    font-family: font-family(sans);
  }
}

`)
    ).toEqual(
      'body{font-family:"Moda Operandi Serif","Times New Roman",Times,serif;font-size:3.75rem;line-height:1.2;letter-spacing:0;margin:2rem 2rem;background-color:#f0f659}@media (max-width: 62rem){body{font-family:"Moda Operandi Sans",Arial,sans-serif !important;font-size:3.75rem !important;line-height:1.2 !important;letter-spacing:0 !important;background-color:#d7b3d0;font-family:"Moda Operandi Sans",Arial,sans-serif}}'
    );
  });

  describe("functions", () => {
    describe("space", () => {
      it("supports index access", () => {
        expect(compile(`body { padding: space(4) }`)).toEqual(
          "body{padding:1rem}"
        );
      });

      it("supports named access", () => {
        expect(
          compile(`body { padding: space('1x') space('three-quarter-x') }`)
        ).toEqual("body{padding:1rem 0.75rem}");
      });
    });
  });

  describe("mixins", () => {
    describe("text", () => {
      it("returns text treatments", () => {
        expect(compile(`body { @include text(eyebrow); }`)).toEqual(
          'body{font-family:"Moda Operandi Sans",Arial,sans-serif;font-size:.75rem;line-height:1.4;letter-spacing:.1em;text-transform:uppercase}'
        );
      });

      it("supports $important: true", () => {
        expect(
          compile(`body { @include text(eyebrow, $important: true); }`)
        ).toEqual(
          'body{font-family:"Moda Operandi Sans",Arial,sans-serif !important;font-size:.75rem !important;line-height:1.4 !important;letter-spacing:.1em !important;text-transform:uppercase !important}'
        );
      });
    });
  });
});
