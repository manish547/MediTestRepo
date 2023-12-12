interface functionData {
    changeLang: number;
    parentItemId: number;
}

export const navigationData = async ({ changeLang, parentItemId = 0 }: functionData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_NAVIGATION_URL}/navigation/item/batch`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                parentItemId: parentItemId || 0,
                menuId: 0,
                languageId: changeLang
            }),
        })
        return await res.json();

    } catch (error) {
        return error;
    }
}