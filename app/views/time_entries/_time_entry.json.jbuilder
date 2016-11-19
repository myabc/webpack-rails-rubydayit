json.extract! time_entry, :id, :project_id, :begin_at, :end_at, :notes, :created_at, :updated_at
json.url time_entry_url(time_entry, format: :json)