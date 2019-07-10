# frozen_string_literal: true

lib = File.expand_path('lib', __dir__)
$LOAD_PATH.unshift(lib) unless $LOAD_PATH.include?(lib)
require 'moda-themes/version'

task :build do
  system "gem build moda-themes.gemspec"
end

task release: :build do
  system "gem push moda-themes-#{ModaThemes::VERSION}.gem"
end
