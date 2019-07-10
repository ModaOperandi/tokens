# frozen_string_literal: true

lib = File.expand_path('lib', __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'moda_themes/version'

task :build do
  system "gem build moda_themes.gemspec"
end

task release: :build do
  system "gem push moda_themes-#{ModaThemes::VERSION}.gem"
end
