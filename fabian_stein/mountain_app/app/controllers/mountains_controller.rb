class MountainsController < ApplicationController
  skip_before_filter :verify_authenticity_token

  def index
  	@mountains = Mountain.all
  end

  def new	
  end

  def create
  	Mountain.create mountain_params 
  	redirect_to(mountains_path)
  end

  def show
  	@mountain = Mountain.find params(:id)
  end

  def destroy
  end

  def edit
  end

  def update
  end

  private
  def mountain_params
  	params.require(:mountain).permit(:name, :height, :country, :first_ascent, :image)
  end

end
