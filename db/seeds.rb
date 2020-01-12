# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do
    User.destroy_all
    Activity.destroy_all
    Kudo.destroy_all

    user1 = User.create!(
        first_name: 'Tatiana',
        last_name: 'Faramarzi',
        email: 'tfaramar@example.com',
        password: 'password',
        city: 'San Francisco',
        state: 'CA',
        country: 'United States'
    )

    user2 = User.create!(
        first_name: 'James',
        last_name: 'Baldwin',
        email: 'jbald@example.com',
        password: 'firenexttime',
        city: 'Paris',
        state: '',
        country: 'France'
    )

    user3 = User.create!(
        first_name: 'Marjane',
        last_name: 'Satrapi',
        email: 'msat@example.com',
        password: 'persepolis',
        city: 'San Francisco',
        state: 'CA',
        country: 'United States'
    )

    user4 = User.create!(
        first_name: 'Raymond',
        last_name: 'Carver',
        email: 'rcarver@example.com',
        password: 'cathedral',
        city: 'Port Angeles',
        state: 'WA',
        country: 'United States'
    )

    act1 = Activity.create!(
        user_id: 1,
        sport: 1,
        title: 'How to beat the flu',
        personal_record: false,
        start_time: Time.zone.at(1449506825)
    )

    act2 = Activity.create!(
        user_id: 1,
        sport: 2,
        title: 'Type 2 fun',
        personal_record: true,
        start_time: Time.zone.at(1449506820)
    )

    act3 = Activity.create!(
        user_id: 2,
        sport: 2,
        title: 'Nothing can be changed until it is faced!',
        personal_record: true,
        start_time: Time.zone.at(1449506820)
    )

    act4 = Activity.create!(
        user_id: 3,
        sport: 1,
        title: 'I\'m unstoppable on my bicycle',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act5 = Activity.create!(
        user_id: 3,
        sport: 1,
        title: 'Freedom in the headlands',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act6 = Activity.create!(
        user_id: 1,
        sport: 1,
        title: 'Afternoon Ride',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act7 = Activity.create!(
        user_id: 3,
        sport: 2,
        title: 'Afternoon run',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act8 = Activity.create!(
        user_id: 2,
        sport: 2,
        title: 'Run on Beale St',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act9 = Activity.create!(
        user_id: 4,
        sport: 2,
        title: 'Riding out that hangover',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act10 = Activity.create!(
        user_id: 1,
        sport: 2,
        title: 'Bike camping forever.',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act10 = Activity.create!(
        user_id: 3,
        sport: 1,
        title: 'I do my hair toss',
        personal_record: true,
        start_time: Time.zone.at(1449506820)
    )

    act11 = Activity.create!(
        user_id: 1,
        sport: 2,
        title: 'Presidio ridez',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act12 = Activity.create!(
        user_id: 4,
        sport: 1,
        title: 'I was walking.',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act13 = Activity.create!(
        user_id: 1,
        sport: 1,
        title: 'Morning run',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act14 = Activity.create!(
        user_id: 3,
        sport: 1,
        title: 'Golden gate park ramble',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    act15 = Activity.create!(
        user_id: 2,
        sport: 2,
        title: 'Sunset ride',
        personal_record: false,
        start_time: Time.zone.at(1449506820)
    )

    kudo1 = Kudo.create!(
        user_id: 1,
        activity_id: 1
    )

    kudo2 = Kudo.create!(
        user_id: 2,
        activity_id: 1
    )

    kudo3 = Kudo.create!(
        user_id: 2,
        activity_id: 4
    )

    follow1 = Follow.create!(
        user_id: 2,
        follower_id: 1
    )

    follow2 = Follow.create!(
        user_id: 3,
        follower_id: 1
    )

    follow3 = Follow.create!(
        user_id: 3,
        follower_id: 2
    )

    follow4 = Follow.create!(
        user_id: 4,
        follower_id: 1
    )

    follow4 = Follow.create!(
        user_id: 1,
        follower_id: 4
    )

end

