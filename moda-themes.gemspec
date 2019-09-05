# frozen_string_literal: true

lib = File.expand_path("lib", __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require "moda-themes/version"

Gem::Specification.new do |spec|
  spec.name = "moda-themes"
  spec.version = ModaThemes::VERSION
  spec.authors = ["dzucconi"]
  spec.email = ["damon.zucconi@modaoperandi.com"]
  spec.summary = "Constant themed values for modaoperandi.com"
  spec.homepage = "https://github.com/ModaOperandi/themes"
  spec.license = "MIT"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = spec.homepage

  spec.files = Dir.glob("{lib}/**/*") + %w(LICENSE README.md)

  spec.add_runtime_dependency("sass", "~> 3.3")

  spec.add_development_dependency "bundler", "~> 2.0"
  spec.add_development_dependency "rake", "~> 10.0"
  spec.add_development_dependency "rspec", "~> 3.0"
  spec.add_development_dependency "byebug", "~> 9.0"
end
