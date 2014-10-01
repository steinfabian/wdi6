class CreateMountains < ActiveRecord::Migration
  def change
    create_table :mountains do |t|
    	
    	t.string :name
    	t.integer :height
    	t.text :country
    	t.integer :first_ascent
    	t.text :image
    	t.timestamps

    end
  end
end
