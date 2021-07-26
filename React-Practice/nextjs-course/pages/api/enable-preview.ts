export default ((req: any, res: any) => {

    res.setPreviewData({});
    res.statusCode = 200;
    res.json({ name: "John"})
   
})