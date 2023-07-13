export const clientEvents = {
    outgoing: {

    },
    incoming: {
        GRAVITY: "scGravity"
    }
};

export const serverEvents = {
    incoming: {

    },
    outgoing: {
        GRAVITY: "scGravity"
    }
};

export function makeMessage(action, data) {
    const resp = {
        action: action,
        data: data
    };
    return JSON.stringify(resp);
}
