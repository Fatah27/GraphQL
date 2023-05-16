const graphql = require('graphql');
const _ = require('lodash');
const {GraphQLObjectType, GraphQLString, GraphQLInt, GraphQLSchema} = graphql; 

const mobils = [
    {"id":1,"merk":"nissan","model":"R35","kapasitasMesin":"3800cc","tahunPembuatan":"2012"},
    {"id":2,"merk":"honda","model":"Civic","kapasitasMesin":"1800cc","tahunPembuatan":"2015"},
    {"id":3,"merk":"toyota","model":"Fortuner","kapasitasMesin":"2500cc","tahunPembuatan":"2018"},
    {"id":4,"merk":"mitsubishi","model":"Pajero Sport","kapasitasMesin":"2400cc","tahunPembuatan":"2019"},
    {"id":5,"merk":"suzuki","model":"Ertiga","kapasitasMesin":"1500cc","tahunPembuatan":"2017"},
    {"id":6,"merk":"mazda","model":"CX-5","kapasitasMesin":"2200cc","tahunPembuatan":"2016"},
    {"id":7,"merk":"hyundai","model":"Accent","kapasitasMesin":"1400cc","tahunPembuatan":"2020"},
    {"id":8,"merk":"kia","model":"Seltos","kapasitasMesin":"1500cc","tahunPembuatan":"2021"},
    {"id":9,"merk":"chevrolet","model":"Trailblazer","kapasitasMesin":"2000cc","tahunPembuatan":"2018"},
    {"id":10,"merk":"ford","model":"Ranger","kapasitasMesin":"3200cc","tahunPembuatan":"2017"},
    {"id":11,"merk":"jeep","model":"Wrangler","kapasitasMesin":"3600cc","tahunPembuatan":"2020"},
    {"id":12,"merk":"bmw","model":"X5","kapasitasMesin":"3000cc","tahunPembuatan":"2019"},
    {"id":13,"merk":"mercedes-benz","model":"C-Class","kapasitasMesin":"2000cc","tahunPembuatan":"2021"},
    {"id":14,"merk":"audi","model":"A4","kapasitasMesin":"2000cc","tahunPembuatan":"2019"},
    {"id":15,"merk":"volkswagen","model":"Tiguan","kapasitasMesin":"1400cc","tahunPembuatan":"2020"},
    {"id":16,"merk":"subaru","model":"Forester","kapasitasMesin":"2500cc","tahunPembuatan":"2015"},
    {"id":17,"merk":"lexus","model":"RX","kapasitasMesin":"3500cc","tahunPembuatan":"2016"},
    {"id":18,"merk":"infiniti","model":"Q50","kapasitasMesin":"2000cc","tahunPembuatan":"2018"},
    {"id":19,"merk":"maserati","model":"Levante","kapasitasMesin":"3000cc","tahunPembuatan":"2021"},
    {"id":20,"merk":"porsche","model":"911","kapasitasMesin":"3000cc","tahunPembuatan":"2020"},
]
  

const mobilType = new GraphQLObjectType({
    name : 'Mobil',
    fields: {
        id:{type:GraphQLInt},
        merk:{type:GraphQLString},
        model:{type:GraphQLString},
        kapasitasMesin:{type:GraphQLString},
        tahunPembuatan:{type:GraphQLString}
    }
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      mobil: {
        type: mobilType,
        args: { id: { type: GraphQLInt } },
        resolve(parentValue, args) {
          return _.find(mobils, { id: args.id })
        }
      },
      mobilsByTahun: {
        type: mobilType,
        args: { tahunPembuatan: { type: GraphQLString } },
        resolve(parentValue, args) {
            return _.find(mobils, { tahunPembuatan: args.tahunPembuatan });
        },
    },
},
});


module.exports = new GraphQLSchema({
    query:RootQuery
})