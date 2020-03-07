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
    Follow.destroy_all
    Route.destroy_all

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

    route1 = Route.create!(
        user_id: user1.id,
        sport: 1,
        title: "Classic Presidio Loop",
        coordinates: "[[-122.472539,37.782585],[-122.473002,37.782564],[-122.473368,37.787504],[-122.475007,37.787876],[-122.475627,37.788715],[-122.475718,37.790438],[-122.475078,37.791643],[-122.475302,37.793666],[-122.477603,37.7956],[-122.477703,37.796124],[-122.476697,37.797558],[-122.477626,37.798803],[-122.478194,37.800424],[-122.478385,37.799918],[-122.475822,37.803634],[-122.475402,37.805466],[-122.473764,37.806628],[-122.473605,37.805924],[-122.472762,37.805158],[-122.470943,37.804508],[-122.470005,37.804636],[-122.469927,37.804894],[-122.468087,37.803547],[-122.467447,37.803779],[-122.462447,37.803068],[-122.466463,37.803497],[-122.461145,37.802862],[-122.459772,37.803504],[-122.454222,37.804217],[-122.454873,37.801005],[-122.453818,37.800591],[-122.454527,37.800858],[-122.457683,37.796688],[-122.458399,37.796945],[-122.458783,37.796794],[-122.461235,37.794966],[-122.461584,37.79447],[-122.461387,37.793258],[-122.460909,37.792619],[-122.458876,37.79199],[-122.458687,37.790081],[-122.459928,37.78954],[-122.471681,37.787187],[-122.472283,37.786694],[-122.472226,37.783258],[-122.472226,37.783258]]",
        est_time: 2694,
        distance: 6.14
    )

    act1 = Activity.create!(
        user_id: user1.id,
        sport: 1,
        title: 'How to beat the flu',
        distance: 40.73,
        elevation: 6188,
        elapsed_time: 15932,
        personal_record: false,
        start_time: Time.zone.at(1572432968)
    )

    act2 = Activity.create!(
        user_id: user1.id,
        sport: 2,
        title: 'Type 2 fun',
        distance: 5.76,
        elevation: 598,
        elapsed_time: 4200,
        personal_record: true,
        start_time: Time.zone.at(1573569608)
    )

    act3 = Activity.create!(
        user_id: user2.id,
        sport: 2,
        title: 'Nothing can be changed until it is faced!',
        distance: 8.19,
        elevation: 208,
        elapsed_time: 4118,
        personal_record: true,
        start_time: Time.zone.at(1573753208)
    )

    act4 = Activity.create!(
        user_id: user3.id,
        sport: 1,
        title: 'I\'m unstoppable on my bicycle',
        distance: 22.37,
        elevation: 1229,
        elapsed_time: 4450,
        personal_record: false,
        start_time: Time.zone.at(1573753208)
    )

    act5 = Activity.create!(
        user_id: user3.id,
        sport: 1,
        title: 'Freedom in the headlands',
        distance: 8.19,
        elevation: 208,
        elapsed_time: 4118,
        personal_record: false,
        start_time: Time.zone.at(1574324708)
    )

    act6 = Activity.create!(
        user_id: user1.id,
        sport: 1,
        title: 'Afternoon Ride',
        distance: 15.54,
        elevation: 1571,
        elapsed_time: 4665,
        personal_record: false,
        start_time: Time.zone.at(1574688308)
    )

    act7 = Activity.create!(
        user_id: user3.id,
        sport: 2,
        title: 'Afternoon run',
        distance: 4.70,
        elevation: 118,
        elapsed_time: 2018,
        personal_record: false,
        start_time: Time.zone.at(1574979488)
    )

    act8 = Activity.create!(
        user_id: user2.id,
        sport: 2,
        title: 'Walking on Beale St',
        distance: 1.00,
        elevation: 264,
        elapsed_time: 2100,
        personal_record: false,
        start_time: Time.zone.at(1574979480)
    )

    act9 = Activity.create!(
        user_id: user4.id,
        sport: 1,
        title: 'Riding out that hangover',
        distance: 2.45,
        elevation: 478,
        elapsed_time: 3500,
        personal_record: false,
        start_time: Time.zone.at(1575203708)
    )

    act10 = Activity.create!(
        user_id: user1.id,
        sport: 1,
        title: 'Bike camping forever.',
        distance: 22.80,
        elevation: 2058,
        elapsed_time: 6780,
        personal_record: false,
        start_time: Time.zone.at(1575654908)
    )

    act11 = Activity.create!(
        user_id: user1.id,
        sport: 1,
        title: 'Presidio ridez',
        distance: 23.88,
        elevation: 3222,
        elapsed_time: 8160,
        personal_record: false,
        start_time: Time.zone.at(1575816908)
    )

    act12 = Activity.create!(
        user_id: user4.id,
        sport: 2,
        title: 'I was walking.',
        distance: 1.37,
        elevation: 348,
        elapsed_time: 4160,
        personal_record: false,
        start_time: Time.zone.at(1575919208)
    )

    act13 = Activity.create!(
        user_id: user1.id,
        sport: 2,
        title: 'Morning run',
        distance: 2.45,
        elevation: 160,
        elapsed_time: 5160,
        personal_record: false,
        start_time: Time.zone.at(1576395608)
    )

    act14 = Activity.create!(
        user_id: user3.id,
        sport: 2,
        title: 'Golden gate park ramble',
        distance: 3.37,
        elevation: 188,
        elapsed_time: 9160,
        personal_record: false,
        start_time: Time.zone.at(1576665608)
    )

    act15 = Activity.create!(
        user_id: user2.id,
        sport: 1,
        title: 'Sunset ride',
        distance: 11.98,
        elevation: 1200,
        elapsed_time: 5100,
        personal_record: false,
        start_time: Time.zone.at(1577637008)
    )

    act16 = Activity.create!(
        user_id: user1.id,
        sport: 2,
        title: 'I do my hair toss',
        distance: 9.21,
        elevation: 1345,
        elapsed_time: 6160,
        route_id: route1.id,
        personal_record: true,
        start_time: Time.zone.at(1578511808)
    )

    kudo1 = Kudo.create!(
        user_id: user1.id,
        activity_id: act1.id
    )

    kudo2 = Kudo.create!(
        user_id: user2.id,
        activity_id: act1.id
    )

    kudo3 = Kudo.create!(
        user_id: user2.id,
        activity_id: act4.id
    )

    kudo4 = Kudo.create!(
        user_id: user3.id,
        activity_id: act14.id
    )

    kudo5 = Kudo.create!(
        user_id: user1.id,
        activity_id: act10.id
    )

    kudo6 = Kudo.create!(
        user_id: user2.id,
        activity_id: act10.id
    )

    kudo7 = Kudo.create!(
        user_id: user3.id,
        activity_id: act12.id
    )

    kudo8 = Kudo.create!(
        user_id: user4.id,
        activity_id: act16.id
    )

    kudo9 = Kudo.create!(
        user_id: user4.id,
        activity_id: act4.id
    )

    follow1 = Follow.create!(
        user_id: user2.id,
        follower_id: user1.id
    )

    follow2 = Follow.create!(
        user_id: user3.id,
        follower_id: user1.id
    )

    follow3 = Follow.create!(
        user_id: user3.id,
        follower_id: user2.id
    )

    follow4 = Follow.create!(
        user_id: user4.id,
        follower_id: user1.id
    )

    follow4 = Follow.create!(
        user_id: user1.id,
        follower_id: user4.id
    )

end

