class FridgeController < ApplicationController
  def index
    @fridges = Fridge.all
  end

  def create
    location = params[:fridge][:location]
    brand = params[:fridge][:brand]
    size = params[:fridge][:size].to_i
    @fridge = Fridge.new(location: location, brand: brand, size: size)
    puts "You've added" + @fridge.to_s
      if @fridge.save
        # redirect_to action: "index"
        redirect_to "/fridge/index"
      end  
  end

  def new
    @fridge = Fridge.new(location:'', brand: '', size:'')
  end 

  def show
  
  end   



end
