class CreateReadyphotos < ActiveRecord::Migration[5.2]
  def change
    create_table :readyphotos do |t|
      t.integer :photo_id
    end
  end
end
