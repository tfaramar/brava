# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_01_11_234213) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "activities", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "sport", null: false
    t.string "title", null: false
    t.float "distance", default: 0.0, null: false
    t.float "elevation", default: 0.0, null: false
    t.integer "elapsed_time", default: 0, null: false
    t.integer "route_id"
    t.boolean "personal_record", default: false
    t.datetime "start_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["sport"], name: "index_activities_on_sport"
    t.index ["user_id"], name: "index_activities_on_user_id"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "follower_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["follower_id", "user_id"], name: "index_follows_on_follower_id_and_user_id", unique: true
    t.index ["user_id"], name: "index_follows_on_user_id"
  end

  create_table "kudos", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "activity_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["activity_id", "user_id"], name: "index_kudos_on_activity_id_and_user_id", unique: true
    t.index ["user_id"], name: "index_kudos_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "city"
    t.string "state"
    t.string "country"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

end
