Overenie marketingovky, ci je tam hrac a podobne:
--nazev tabulky akce
 
SELECT DefinitionID, DefinitionRunID, * FROM [eBet_Marketing].[Actions].[ActionRun] where actionID =  750
SELECT *  FROM [eBet_EventManagement].[Events].[Definition] where ID = 435
 
--'[eBet_EventManagement].[Cache].TC_' + Alias + '_R' + DefinitionRunID
 
select * FROM  [eBet_EventManagement].[Cache].TC_SDA_CasinoRegistrationDepositPromocodeBonusCZ_R2197 where customerID = 228808986
 
 
--vyhodnoceni jedne akce
----------------------- 
SELECT TOP 10 * FROM [eBet_Log].[Logs].[Log] where Exter = '425' order by ID desc
 
--vytvareni akce
--------------
SELECT TOP 10 * FROM [eBet_Log].[Logs].[LogB] where Source like 'eBet_EventManagement.Events%' order by ID desc
 
--vyhodnoceni 109
---------------
SELECT TOP 100 * FROM [eBet_EventManagement].[Evaluations].[DefinitionRunExec] order by EvaluationID desc
 
--vyhodnoceni 196
---------------
SELECT TOP 100 * FROM [eBet_EventManagement].[Evaluations].[EvaluationBaseRun] order by ID desc
-----------------------------------------------------------------------------------------------------------------
SELECT [ActionID]
     ,[ID]
     ,[State]
     ,[DateFrom]
     ,[DateTo]
     ,[DefinitionID]
     ,[DefinitionRunID]
     ,(SELECT TOP 1 Alias FROM [eBet_EventManagement].[Events].[Definition] ed where ed.ID = ar.DefinitionID)  AS Alias
     ,'[eBet_EventManagement].[Cache].TC_' + (SELECT TOP 1 Alias FROM [eBet_EventManagement].[Events].[Definition] ed where ed.ID = ar.DefinitionID) + '_R' + CONVERT(varchar, ar.[DefinitionRunID]) AS tbl
 FROM [eBet_Marketing].[Actions].[ActionRun] ar
 where actionID IN ( 3019, 3020)
