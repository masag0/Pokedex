class Api::PokemonController < ApplicationController

  def index
    @pokemons = Pokemon.all
    # sleep(1)
    render :index
  end

  def show
    @pokemon = Pokemon.find_by(id: params[:id])
    sleep(1)
    render :show
  end

  def create
    @pokemon = Pokemon.new(pokemon_params)
    if @pokemon.save
      render :create
    else
      render json: @pokemon.errors.full_messages, status: 422
    end
  end


  private
  def pokemon_params
    params
    .require(:pokemon)
    .permit(
      :name, :attack, :defense,
      :poke_type, :moves, :image_url
    )
  end
end
