import parse from 'html-react-parser';
export const pageContentData = async ({ contentID } : { contentID: number }) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_NAVIGATION_URL}/content/${contentID}`)
        return await res.json()
    } catch (error) {
        return error
    }
}

export const isHTMLFormatted = (input: string): boolean => {
    const htmlRegex = /<[a-z][\s\S]*>/i;
    return htmlRegex.test(input);
  };
  
export  const removeTransparentStyle = (html: string): React.ReactElement => {
    // Parse the HTML string
    const parsedHtml = parse(html, {
      replace: (domNode : any) => {
        // Check if the node has a 'style' attribute
        if (domNode.attribs && domNode.attribs.style) {
          // Remove 'transparent' from the 'style' attribute
          domNode.attribs.style = domNode.attribs.style.replace(/color:\s*transparent;/, '');
        }
        return domNode;
      },
    });

    return <>{parsedHtml}</>;
  };