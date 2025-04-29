import React, { useEffect, useState, useCallback } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api'
import './pageStyles/WhereToRecycle.css'

const containerStyle = {
  width: '100%',
  height: '400px'
}

export default function NearestRecyclingCenters() {
  const [userLocation, setUserLocation] = useState(null)
  const [markers, setMarkers] = useState([])
  const [activeMarker, setActiveMarker] = useState(null)

  // Get user's location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          })
        },
        (error) => {
          console.error('Error getting location:', error)
        }
      )
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])

  // When the map loads, search for recycling centers nearby
  const onMapLoad = useCallback((map) => {
    if (userLocation && window.google) {
      const service = new window.google.maps.places.PlacesService(map)
      const request = {
        location: new window.google.maps.LatLng(userLocation.lat, userLocation.lng),
        radius: 5000, // 5km search radius
        keyword: 'recycling center',
      }
      service.nearbySearch(request, (results, status) => {
        if (status === window.google.maps.places.PlacesServiceStatus.OK && results) {
          const newMarkers = results.map((place, index) => ({
            id: index,
            position: place.geometry.location,
            name: place.name,
            address: place.vicinity || 'Address not available',
          }))
          setMarkers(newMarkers)
        } else {
          console.error('Nearby search failed:', status)
        }
      })
    }
  }, [userLocation])

  // When a marker is clicked, set it as the active marker
  const handleMarkerClick = (marker) => {
    setActiveMarker(marker)
  }

  // Helper that generates a URL for Google Maps directions for a given travel mode
  const getDirectionsUrl = (lat, lng, mode) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}&travelmode=${mode}`
  }

  return (
    <section className="nearest-recycling">
      <h1>Nearest Recycling Centers</h1>
      {!userLocation ? (
        <p>Requesting your location...</p>
      ) : (
        <LoadScript
          googleMapsApiKey="AIzaSyDjEZ6LyF-hxn54Ooj_xQH2ZTQMXzTCC44"
          libraries={['places']}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={userLocation}
            zoom={13}
            onLoad={onMapLoad}
          >
            {/* Marker for user's location */}
            <Marker position={userLocation} title="You are here" />

            {/* Markers for recycling centers */}
            {markers.map((marker) => (
              <Marker
                key={marker.id}
                position={{
                  lat: marker.position.lat(),
                  lng: marker.position.lng(),
                }}
                title={marker.name}
                onClick={() => handleMarkerClick(marker)}
              />
            ))}

            {/* InfoWindow for the active marker */}
            {activeMarker && (
              <InfoWindow
                position={{
                  lat: activeMarker.position.lat(),
                  lng: activeMarker.position.lng(),
                }}
                onCloseClick={() => setActiveMarker(null)}
              >
                <div className="info-window">
                  <h3>{activeMarker.name}</h3>
                  <p>{activeMarker.address}</p>
                  <p>Directions: </p>
                  <div className="direction-links">
                    <a
                      href={getDirectionsUrl(
                        activeMarker.position.lat(),
                        activeMarker.position.lng(),
                        'driving'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Driving
                    </a>
                    {' | '}
                    <a
                      href={getDirectionsUrl(
                        activeMarker.position.lat(),
                        activeMarker.position.lng(),
                        'walking'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Walking
                    </a>
                    {' | '}
                    <a
                      href={getDirectionsUrl(
                        activeMarker.position.lat(),
                        activeMarker.position.lng(),
                        'transit'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Transit
                    </a>
                  </div>
                </div>
              </InfoWindow>
            )}
          </GoogleMap>
        </LoadScript>
      )}
    </section>
  )
}