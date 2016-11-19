class CreateTimeEntries < ActiveRecord::Migration[5.0]
  def change
    create_table :time_entries do |t|
      t.references :project, foreign_key: true
      t.datetime :begin_at
      t.datetime :end_at
      t.text :notes

      t.timestamps
    end
  end
end
