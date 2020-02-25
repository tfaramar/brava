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

    user1.photo.attach(io: File.open("/Users/tatianafaramarzi/Documents/strava_clone_userimages/demo-avatar.jpg"), filename: "demo-avatar.jpg")

    user2 = User.create!(
        first_name: 'James',
        last_name: 'Baldwin',
        email: 'jbald@example.com',
        password: 'firenexttime',
        city: 'Paris',
        state: '',
        country: 'France'
    )

    user2.photo.attach(io: File.open("/Users/tatianafaramarzi/Documents/strava_clone_userimages/baldwin-james.jpg"), filename: "baldwin-james.jpg")

    user3 = User.create!(
        first_name: 'Marjane',
        last_name: 'Satrapi',
        email: 'msat@example.com',
        password: 'persepolis',
        city: 'San Francisco',
        state: 'CA',
        country: 'United States'
    )

    user3.photo.attach(io: File.open("/Users/tatianafaramarzi/Documents/strava_clone_userimages/satrapi-marjane.jpg"), filename: "satrapi-marjane.jpg")


    user4 = User.create!(
        first_name: 'Raymond',
        last_name: 'Carver',
        email: 'rcarver@example.com',
        password: 'cathedral',
        city: 'Port Angeles',
        state: 'WA',
        country: 'United States'
    )

    user4.photo.attach(io: File.open("/Users/tatianafaramarzi/Documents/strava_clone_userimages/carver-raymond.jpg"), filename: "carver-raymond.jpg")

    act1 = Activity.create!(
        user_id: 1,
        sport: 1,
        title: 'How to beat the flu',
        distance: 40.73,
        elevation: 6188,
        elapsed_time: 15932,
        personal_record: false,
        start_time: Time.zone.at(1572432968)
    )

    act2 = Activity.create!(
        user_id: 1,
        sport: 2,
        title: 'Type 2 fun',
        distance: 5.76,
        elevation: 598,
        elapsed_time: 4200,
        personal_record: true,
        start_time: Time.zone.at(1573569608)
    )

    act3 = Activity.create!(
        user_id: 2,
        sport: 2,
        title: 'Nothing can be changed until it is faced!',
        distance: 8.19,
        elevation: 208,
        elapsed_time: 4118,
        personal_record: true,
        start_time: Time.zone.at(1573753208)
    )

    act4 = Activity.create!(
        user_id: 3,
        sport: 1,
        title: 'I\'m unstoppable on my bicycle',
        distance: 22.37,
        elevation: 1229,
        elapsed_time: 4450,
        personal_record: false,
        start_time: Time.zone.at(1573753208)
    )

    act5 = Activity.create!(
        user_id: 3,
        sport: 1,
        title: 'Freedom in the headlands',
        distance: 8.19,
        elevation: 208,
        elapsed_time: 4118,
        personal_record: false,
        start_time: Time.zone.at(1574324708)
    )

    act6 = Activity.create!(
        user_id: 1,
        sport: 1,
        title: 'Afternoon Ride',
        distance: 15.54,
        elevation: 1571,
        elapsed_time: 4665,
        personal_record: false,
        start_time: Time.zone.at(1574688308)
    )

    act7 = Activity.create!(
        user_id: 3,
        sport: 2,
        title: 'Afternoon run',
        distance: 4.70,
        elevation: 118,
        elapsed_time: 2018,
        personal_record: false,
        start_time: Time.zone.at(1574979488)
    )

    act8 = Activity.create!(
        user_id: 2,
        sport: 2,
        title: 'Walking on Beale St',
        distance: 1.00,
        elevation: 264,
        elapsed_time: 2100,
        personal_record: false,
        start_time: Time.zone.at(1574979480)
    )

    act9 = Activity.create!(
        user_id: 4,
        sport: 1,
        title: 'Riding out that hangover',
        distance: 2.45,
        elevation: 478,
        elapsed_time: 3500,
        personal_record: false,
        start_time: Time.zone.at(1575203708)
    )

    act10 = Activity.create!(
        user_id: 1,
        sport: 1,
        title: 'Bike camping forever.',
        distance: 22.80,
        elevation: 2058,
        elapsed_time: 6780,
        personal_record: false,
        start_time: Time.zone.at(1575654908)
    )

    act11 = Activity.create!(
        user_id: 1,
        sport: 1,
        title: 'Presidio ridez',
        distance: 23.88,
        elevation: 3222,
        elapsed_time: 8160,
        personal_record: false,
        start_time: Time.zone.at(1575816908)
    )

    act12 = Activity.create!(
        user_id: 4,
        sport: 2,
        title: 'I was walking.',
        distance: 1.37,
        elevation: 348,
        elapsed_time: 4160,
        personal_record: false,
        start_time: Time.zone.at(1575919208)
    )

    act13 = Activity.create!(
        user_id: 1,
        sport: 2,
        title: 'Morning run',
        distance: 2.45,
        elevation: 160,
        elapsed_time: 5160,
        personal_record: false,
        start_time: Time.zone.at(1576395608)
    )

    act14 = Activity.create!(
        user_id: 3,
        sport: 2,
        title: 'Golden gate park ramble',
        distance: 3.37,
        elevation: 188,
        elapsed_time: 9160,
        personal_record: false,
        start_time: Time.zone.at(1576665608)
    )

    act15 = Activity.create!(
        user_id: 2,
        sport: 1,
        title: 'Sunset ride',
        distance: 11.98,
        elevation: 1200,
        elapsed_time: 5100,
        personal_record: false,
        start_time: Time.zone.at(1577637008)
    )

    act16 = Activity.create!(
        user_id: 1,
        sport: 2,
        title: 'I do my hair toss',
        distance: 9.21,
        elevation: 1345,
        elapsed_time: 6160,
        personal_record: true,
        start_time: Time.zone.at(1578511808)
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

    kudo4 = Kudo.create!(
        user_id: 3,
        activity_id: 14
    )

    kudo5 = Kudo.create!(
        user_id: 1,
        activity_id: 10
    )

    kudo6 = Kudo.create!(
        user_id: 2,
        activity_id: 10
    )

    kudo7 = Kudo.create!(
        user_id: 3,
        activity_id: 12
    )

    kudo8 = Kudo.create!(
        user_id: 4,
        activity_id: 16
    )

    kudo9 = Kudo.create!(
        user_id: 4,
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

