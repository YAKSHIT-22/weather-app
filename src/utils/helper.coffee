class Item extends Backbone.Model 
    defaults:
      data : []
    render: (location,units) ->
       self = {}
       res = await fetch("https://api.openweathermap.org/data/2.5/weather?q=#{location}&units=#{units}&APPID=cddbf0b42be47fe6061841ce93bf9ab6",{
        method: "GET",
        mode: "cors"
       })
       return res.json()

export class ItemView extends Backbone.View
  model: new Item()
  initialize: ->
    _.bindAll @

  updateLocation: (location,units) ->
    @res=await @model.render(location,units)
    @res
  addLocation: (location,units) ->
    @res=await @model.render(location,units)
    @res
   