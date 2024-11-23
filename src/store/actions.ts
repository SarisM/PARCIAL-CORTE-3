import { dispatch } from '../store';
import { Actions, Screens } from '../types/store';
import { addEvent, deleteEvent, getEvent,  } from '../utils/firebase';

export const navigate = (screen: Screens) => {
    return {
        action: Actions.NAVIGATE,
        payload: screen,
    };
};

export const addEventsAction = async (events: any) => {
    const success = await addEvent(events);
    if (success) {
        return {
            action: Actions.ADDEVENTS,
            payload: events,
        };
    }
    return null;
};

export const getEventsAction = async () => {
    const events = await getEvent();
    return {
        action: Actions.GETEVENTS,
        payload: events,
    };
};

export const deleteEventsAction = async (uid: string) => {
    await deleteEvent(uid);

    return {
        action: Actions.DELETEPRODUCT,
        payload: uid,
    };
}

