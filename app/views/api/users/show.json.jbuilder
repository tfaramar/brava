
json.partial! "api/users/user", user: @user
json.photoUrl url_for(@user.photo)
json.followers @user.followers.size
json.followees @user.followees.size
json.activities @user.activity_ids
json.latestActivity @user.activities.last


