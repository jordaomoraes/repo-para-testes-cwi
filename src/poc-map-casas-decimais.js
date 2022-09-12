class StockBalanceDT {
    transform(stocks) {
      const csvString = [
        [
          'Branch__r.SubsidiaryCode__c',
          'Product2__r.ProductCode__c',
          'LocalCode__c',
          'ERPQuantity__c',
          'AverageCost__c',
          'PricingCost__c',
          'SpinningClass__c',
          'ExternalID__c',
          'Deleted__c',
          'Addressing__c',
          'InPreEntry__c',
          'Requests__c',
          'ArrivalDates__c'
        ],
        ...stocks.map(({
          B2_FILIAL,
          B2_COD,
          B2_LOCAL,
          B2_QATU,
          B2_CM1,
          B2_CUSFP, 
          ZP_CGIROSD,
          ID_EXTERNO,
          FLAG_EXCLUSAO,
          B2_QACLASS,
          B2_NAOCLAS,
          QUANTPED,
          CHEGADAS
        }) => [
          B2_FILIAL,
          B2_COD,
          B2_LOCAL,
          B2_QATU,
          B2_CM1 = Number(parseFloat(B2_CM1).toFixed(4)),
          B2_CUSFP = Number(parseFloat(B2_CUSFP).toFixed(4)),
          ZP_CGIROSD,
          ID_EXTERNO,
          FLAG_EXCLUSAO === 'True',
          B2_QACLASS,
          B2_NAOCLAS,
          QUANTPED,
          CHEGADAS
        ])
      ];

      const result = (csvString.map((column) => column.join(';'))).join('\n');

      return result;
    }
  }

  module.exports = new StockBalanceDT();
