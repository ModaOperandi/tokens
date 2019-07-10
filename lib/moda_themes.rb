require 'moda_themes/version'

module ModaThemes
  if defined?(Rails) && defined?(Rails::Engine)
    class Engine < ::Rails::Engine
      config.assets.paths << File.expand_path("./assets", __dir__)
    end
  else
    begin
      require "sass"
      Sass.load_paths << File.expand_path("./assets", __dir__)
    rescue LoadError
    end
  end
end
