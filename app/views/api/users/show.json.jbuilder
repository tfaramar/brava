
json.partial! "api/users/user", user: @user
json.followers @user.followers.size
json.followees @user.followees.size
json.activities @user.activity_ids


