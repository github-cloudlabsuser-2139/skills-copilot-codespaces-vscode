# Login to Azure
Connect-AzAccount

# Variables
$resourceGroupName = "example-resources"
$location = "East US"
$storageAccountName = "examplestoraccount"
$storageSkuName = "Standard_LRS" # Standard Locally-Redundant Storage
$storageKind = "StorageV2" # General-purpose v2 storage account
$accessTier = "Hot"

# Create a new resource group
New-AzResourceGroup -Name $resourceGroupName -Location $location

# Create a storage account
New-AzStorageAccount -Name $storageAccountName `
                     -ResourceGroupName $resourceGroupName `
                     -Location $location `
                     -SkuName $storageSkuName `
                     -Kind $storageKind `
                     -AccessTier $accessTier

Write-Host "Storage account $storageAccountName created successfully."