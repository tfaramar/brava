# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
    User.destroy_all

    
    user1 = User.create!(
        first_name: 'Tatiana',
        last_name: 'Faramarzi',
        email: 'tfaramar@example.com',
        password: 'password',
        city: 'San Francisco',
        state: 'CA',
        country: 'United States'
    )

    act1 = Activity.create!(
        user_id: 1,
        type: 1,
        title: 'How to beat the flu',
        personal_record: false,
        start_time: 1578614036
    )

    act1 = Activity.create!(
        user_id: 1,
        type: 2,
        title: 'Type 2 fun',
        personal_record: true,
        start_time: 1578614000
    )

end

