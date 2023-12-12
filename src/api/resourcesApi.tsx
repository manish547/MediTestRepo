interface functionData {
    changeLang: number;
    entityType: number;
}

export const postTabbar = async ({ changeLang, entityType = 0 }: functionData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_NAVIGATION_URL}/post-category/batch`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                entityType: entityType,
                languageId: changeLang
            }),
        })
        return await res.json();
    } catch (error) {
        return error
    }
}
export const contentApi = async ({selectedFilter, pageIndex, pageSize }: {selectedFilter:number, pageIndex:number, pageSize:number}) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_NAVIGATION_URL}/content/batch`, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify({
                    siteContentCategoryId: selectedFilter,
                    siteContentType: 0,
                    pageSize: pageSize,
                    pageIndex: pageIndex,
                    nameKeywords: ""          
            }),
    })
    return await res.json();
} catch (error) {
    return error
}
}

export const modifiedHtml = (htmlString: string) => {
    // Use regular expressions to replace font-size and image dimensions
    const dynamicModifiedString = htmlString.replace(/(font-size:\d+px)/g, (match, fontSize) => {
        // Extract the font size value (e.g., "18px")
        const size = fontSize.match(/\d+/)[0];

        // Check if font size is greater than 16px, replace with 16px
        if (parseInt(size) > 16) {
            return 'font-size:16px';
        }

        return match; // Font size is 16px or greater, no change needed
    }).replace(/(height:\d+px;\s*width:\d+px)/g, (match, dimensions) => {
        // Extract the height and width values (e.g., "height:467px; width:800px")
        const [height, width] = dimensions.split(';');

        // Extract the numeric values
        const heightValue = parseInt(height.match(/\d+/)[0]);
        const widthValue = parseInt(width.match(/\d+/)[0]);

        // Check if height or width is greater than 200px
        if (heightValue > 200 || widthValue > 200) {
            return 'height:200px; width:300px';
        }

        return match; // Height and width are 200px or less, no change needed
    });

    return dynamicModifiedString;
};