
    
  
    var public = {
      x: ['1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
      y: [225.77, 231.75, , 236.37, 246.57, 255.90, 275.14, 292.30, 307.35, 322.94, 333.04, 346.61, 355.26, 370.63, 392.86, 405.63, 412.39, 422.06, 436.74, 461.73, 489.89, 508.20],
      name: 'Public',
      type: 'bar'
    };
    
    var private = {
      x: ['1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016'],
      y: [268.94, 278.35, 296.62, 311.45, 329.24, 350.83, 377.24, 401.95, 417.20, 429.11, 441.12, 455.15, 462.00, 481.08, 492.64, 502.76, 518.51, 521.95, 535.16, 565.96, 593.24],
      name: 'Private',
      type: 'bar',
      
    };
    
    var data = [public, private];
    
    var layout = {barmode: 'group'};
    
    Plotly.newPlot('plot1', data, layout);


