json.set! kudo.id do
    json.user do
        json.extract! kudo.user, :id, :first_name, :last_name
    end
end
