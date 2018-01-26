json.pokemon do
  json.(@pokemon,
    :id, :name, :attack, :defense, :moves, :poke_type)
    json.image_url @pokemon.image_url
end