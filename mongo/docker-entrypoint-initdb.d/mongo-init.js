print("Initializing Database");
print(
    "Start #################################################################"
);

db = db.getSiblingDB("ms-security");
db.createUser({
    user: "bahtiyar",
    pwd: "mongo",
    roles: [{ role: "readWrite", db: "ms-security" }]
});
db.createCollection("users");

db = db.getSiblingDB("ms-customers");
db.createUser({
    user: "bahtiyar",
    pwd: "mongo",
    roles: [{ role: "readWrite", db: "ms-customers" }]
});
db.createCollection("customers");

db = db.getSiblingDB("ms-notifications");
db.createUser({
    user: "bahtiyar",
    pwd: "mongo",
    roles: [{ role: "readWrite", db: "ms-notifications" }]
});
db.createCollection("notifications");

print("END #################################################################");
