import { writable } from 'svelte/store';

const meetups = writable([]);

const customMeetupsStore = {
    subscribe: meetups.subscribe,
    setMeetups: (meetupArray) => {
        meetups.set(meetupArray)
    },
    addMeetup: (meetupData) => {
        const newMeetup = {
            ...meetupData,
            // id: Math.random().toString(),
            // isFavorite: false
        };

        meetups.update(items => {
            return [newMeetup, ...items];
        })
    },
    updateMeetup: (id, meetupData) => {
        meetups.update(items => {
            const meetupIndex = items.findIndex(i => i.id === id);
            const updatedMeetup = {...items[meetupIndex], ...meetupData}
            const updatedMeetups = [...items];
            updatedMeetups[meetupIndex] = updatedMeetup;

            return updatedMeetups;
        });
    },
    removeMeetup: (id) => {
        meetups.update(items => {
            return items.filter(i => i.id !== id);
        });
    },
    toggleFavorite: (id) => {

        meetups.update(items => {
            var tempMeetups = items;
            for (var i = 0; i < tempMeetups.length; i++) {
                if (tempMeetups[i].id === id) {
                    tempMeetups[i].isFavorite = !tempMeetups[i].isFavorite;
                    break;
                }
            }
            return tempMeetups;
        });

    } 
};

export default customMeetupsStore;