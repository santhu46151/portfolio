$path = "$PWD\IPL_Analytics_Dashboard.xlsx"

if (Test-Path $path) {
    Remove-Item $path -Force
}

$excel = New-Object -ComObject Excel.Application
$excel.Visible = $false
$excel.DisplayAlerts = $false
$wb = $excel.Workbooks.Add()

# Create Sheets - note that Add() inserts BEFORE the active sheet by default
$wsTeams = $wb.Sheets.Item(1)
$wsTeams.Name = "Team_Stats"
$wsBatters = $wb.Sheets.Add([System.Reflection.Missing]::Value, $wb.Sheets.Item($wb.Sheets.Count))
$wsBatters.Name = "Top_Batters"
$wsBowlers = $wb.Sheets.Add([System.Reflection.Missing]::Value, $wb.Sheets.Item($wb.Sheets.Count))
$wsBowlers.Name = "Top_Bowlers"

# Put Dashboard as the first sheet
$wsDash = $wb.Sheets.Add($wb.Sheets.Item(1))
$wsDash.Name = "Dashboard"

function Add-Data ($ws, $headers, $data) {
    for ($c = 0; $c -lt $headers.Length; $c++) {
        $ws.Cells.Item(1, $c + 1) = $headers[$c]
        $ws.Cells.Item(1, $c + 1).Font.Bold = $true
    }
    $r = 2
    foreach ($row in $data) {
        for ($c = 0; $c -lt $row.Length; $c++) {
            $ws.Cells.Item($r, $c + 1) = $row[$c]
        }
        $r++
    }
    $ws.Columns.AutoFit() | Out-Null
}

# --- Team Stats ---
$teamHeaders = @("Team", "Matches", "Wins", "Losses", "Titles", "Win %")
$teamData = @(
    @("Mumbai Indians", 247, 138, 105, 5, 55.8),
    @("Chennai Super Kings", 225, 131, 91, 5, 58.2),
    @("Kolkata Knight Riders", 236, 119, 114, 3, 50.4),
    @("Royal Challengers Bangalore", 241, 114, 120, 0, 47.3),
    @("Sunrisers Hyderabad", 166, 78, 84, 1, 46.9),
    @("Delhi Capitals", 238, 105, 127, 0, 44.1),
    @("Rajasthan Royals", 206, 101, 100, 1, 49.0),
    @("Punjab Kings", 232, 104, 124, 0, 44.8)
)
Add-Data $wsTeams $teamHeaders $teamData

# --- Top Batters ---
$battersHeaders = @("Player", "Team", "Runs", "Strike Rate", "100s", "50s")
$battersData = @(
    @("Virat Kohli", "RCB", 7263, 130.02, 7, 50),
    @("Shikhar Dhawan", "PBKS", 6617, 127.14, 2, 50),
    @("David Warner", "DC", 6397, 139.92, 4, 61),
    @("Rohit Sharma", "MI", 6211, 130.04, 1, 42),
    @("Suresh Raina", "CSK", 5528, 136.76, 1, 39),
    @("AB de Villiers", "RCB", 5162, 151.68, 3, 40)
)
Add-Data $wsBatters $battersHeaders $battersData

# --- Top Bowlers ---
$bowlersHeaders = @("Player", "Team", "Wickets", "Economy", "5Ws")
$bowlersData = @(
    @("Yuzvendra Chahal", "RR", 187, 7.67, 1),
    @("Dwayne Bravo", "CSK", 183, 8.38, 0),
    @("Piyush Chawla", "MI", 179, 7.91, 0),
    @("Amit Mishra", "LSG", 173, 7.38, 1),
    @("Ravichandran Ashwin", "RR", 171, 7.01, 0),
    @("Lasith Malinga", "MI", 170, 7.14, 1)
)
Add-Data $wsBowlers $bowlersHeaders $bowlersData

# --- Dashboard Setup ---
$wsDash.Activate()
$excel.ActiveWindow.DisplayGridlines = $false

# Dashboard Title
$wsDash.Cells.Item(1, 1) = "IPL Analytics Dashboard"
$wsDash.Cells.Item(1, 1).Font.Size = 24
$wsDash.Cells.Item(1, 1).Font.Bold = $true
$wsDash.Cells.Item(1, 1).Font.ColorIndex = 5 # Blue

# Chart 1: Team Wins
$charts = $wsDash.ChartObjects()
$c1 = $charts.Add(20, 50, 400, 250)
$c1.Chart.ChartType = 51 # xlColumnClustered
$c1.Chart.SetSourceData($wsTeams.Range("A1:A9,C1:C9"))
$c1.Chart.HasTitle = $true
$c1.Chart.ChartTitle.Text = "Total Wins by Team"
$c1.Chart.HasLegend = $false

# Chart 2: IPL Titles (Pie)
$c2 = $charts.Add(430, 50, 400, 250)
$c2.Chart.ChartType = 5 # xlPie
$c2.Chart.SetSourceData($wsTeams.Range("A1:A9,E1:E9"))
$c2.Chart.HasTitle = $true
$c2.Chart.ChartTitle.Text = "IPL Titles by Team"

# Chart 3: Top Batters (Bar)
$c3 = $charts.Add(20, 310, 400, 250)
$c3.Chart.ChartType = 57 # xlBarClustered
$c3.Chart.SetSourceData($wsBatters.Range("A1:A7,C1:C7"))
$c3.Chart.HasTitle = $true
$c3.Chart.ChartTitle.Text = "Top Run Scorers"
$c3.Chart.HasLegend = $false

# Chart 4: Top Bowlers (Column)
$c4 = $charts.Add(430, 310, 400, 250)
$c4.Chart.ChartType = 51
$c4.Chart.SetSourceData($wsBowlers.Range("A1:A7,C1:C7"))
$c4.Chart.HasTitle = $true
$c4.Chart.ChartTitle.Text = "Top Wicket Takers"
$c4.Chart.HasLegend = $false

# Save and Cleanup
$wb.SaveAs($path)
$wb.Close()
$excel.Quit()
[System.Runtime.Interopservices.Marshal]::ReleaseComObject($excel) | Out-Null
Write-Output "Dashboard Created at $path"
